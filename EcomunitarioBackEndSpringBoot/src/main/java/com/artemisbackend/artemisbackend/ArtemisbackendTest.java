package com.artemisbackend.artemisbackend;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import jakarta.annotation.PostConstruct;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.Reader;
import java.util.Iterator;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;


@RestController
@CrossOrigin
public class ArtemisbackendTest {
    Connection connection = null;
    Statement statement = null;
    ResultSet resultset = null;
    @CrossOrigin
    @PostConstruct
    public void init() {
        String url = "jdbc:mysql://localhost:3307/artemisdb";
        String username = "root";
        String password = "";
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            connection = DriverManager.getConnection(url, username, password);
            statement =connection.createStatement();
            resultset = statement.executeQuery("select * from artemisusers");
            ArtemisbackendGlobal a = ArtemisbackendGlobal.get_back();
            while(resultset.next()){
                System.out.println(resultset.getString(2) + " " + resultset.getString(3) + " " + resultset.getString(4) + " " + resultset.getString(5));
                ArtemisbackendUsers ceee = new ArtemisbackendUsers(resultset.getString(2), resultset.getString(3), resultset.getString(4), resultset.getString(5),resultset.getString(1));
                a.arrayStore.add(ceee);
            }
        }catch(Exception e){
            System.out.println(e);
        }
    }
    @CrossOrigin
    @GetMapping("/check")
    public String check(){
        String returnString = "[";
        try{
            ArtemisbackendGlobal a = ArtemisbackendGlobal.get_back();
            for(int i = 0; i<a.arrayStore.size();i++){
                returnString += "{";
                returnString += "\"Nome\":" + "\"" +a.arrayStore.get(i).idNome + "\" ,";
                returnString += "\"CPF\":" + "\""  +a.arrayStore.get(i).idCPF + "\" ,";;
                returnString += "\"Email\":"+ "\""  + a.arrayStore.get(i).idEmail + "\", ";
                returnString += "\"DatadeNascimento\":" + "\""  + a.arrayStore.get(i).idDatadeNascimento + "\"";
                returnString += "}";
                if(i+1 != a.arrayStore.size()){
                    returnString += ",";
                }
            }
            

        }catch(Exception e){
            System.out.println(e);
        }
        returnString += "]";

        //return"{\"Nome\":\"Vinizeria\", \"eae\":\"gagagga\"}";
        return returnString;
    }

    @CrossOrigin
    @PostMapping("/delete")
    public String delete(@RequestBody String param){
        System.out.println("eae");
        ArtemisbackendGlobal a = ArtemisbackendGlobal.get_back();
        try{
            JSONParser parser = new JSONParser();
            Object jsonObj  = parser.parse(param);
            JSONObject jsonObject = (JSONObject) jsonObj;
            String Nome = (String) jsonObject.get("index");
            int num = Integer.parseInt(Nome);
            

            ArrayList<ArtemisbackendUsers> delete = a.arrayStore;
            ArtemisbackendUsers celokofi = delete.get(num);

            String query = "DELETE FROM artemisusers WHERE id = " + celokofi.id; 
            try{
                statement.executeUpdate(query);
            }catch(Exception e){
                System.out.println(e);
            }

            delete.remove(num);
            a.arrayStore = delete;
        }catch(Exception e){
            System.out.println(e);
        }

        return "A";
    }

    @CrossOrigin
    @PostMapping("/login")
    public ResponseEntity login(@RequestBody String user) {
        /* 
        */
       try{
        JSONParser parser = new JSONParser();
        Object jsonObj  = parser.parse(user);
        JSONObject jsonObject = (JSONObject) jsonObj;
        String Nome = (String) jsonObject.get("Nome");
        String CPF = (String) jsonObject.get("CPF");
        String Email = (String) jsonObject.get("Email");
        String DatadeNascimento = (String) jsonObject.get("DatadeNascimento");
        ArtemisbackendGlobal a = ArtemisbackendGlobal.get_back();
        ArtemisbackendUsers objeto = null;

        for(int i = 0; i<a.arrayStore.size();i++){

            if(a.arrayStore.get(i).idNome.equals(Nome)){
                objeto = a.arrayStore.get(i);

            }
        }
        if(objeto != null){
            System.out.println("procurando");
            if(objeto.idNome.equals(Nome) && objeto.idCPF.equals(CPF) && objeto.idEmail.equals(Email) && objeto.idDatadeNascimento.equals(DatadeNascimento)){
                return ResponseEntity.ok().build();
            }
        }

        }catch(Exception e){

        }
        return ResponseEntity.internalServerError().build();
    }
    @CrossOrigin
    @PostMapping("artemis")
    public String cacaca(@RequestBody String user) {
        try{
            JSONParser parser = new JSONParser();
            Object jsonObj  = parser.parse(user);
            JSONObject jsonObject = (JSONObject) jsonObj;
            String Nome = (String) jsonObject.get("Nome");
            String CPF = (String) jsonObject.get("CPF");
            String Email = (String) jsonObject.get("Email");
            String DatadeNascimento = (String) jsonObject.get("DatadeNascimento");
            ArtemisbackendGlobal a = ArtemisbackendGlobal.get_back();
            ArtemisbackendUsers objeto = null;
            for(int i = 0; i<a.arrayStore.size();i++){
                if(a.arrayStore.get(i).idNome.equals(Nome)){
                    objeto = a.arrayStore.get(i);
                }
            }
            if(objeto == null){
                String bos = null;
                int caraca = 0;
                try{
                caraca = Integer.parseInt(a.arrayStore.get(a.arrayStore.size()-1).id);
                }catch(Exception e){
                    caraca = 1;
                }
                caraca += 1;
                bos = Integer.toString(caraca);
                objeto = new ArtemisbackendUsers(Nome, CPF, Email, DatadeNascimento, bos);
                a.arrayStore.add(objeto);
                String query = "INSERT INTO artemisusers(id, Nome,CPF,Email,DatadeNascimento) " + "VALUES" + "(\"" + bos + "\",\"" + Nome + "\", \"" + CPF + "\", \"" + Email + "\", \"" + DatadeNascimento + "\")"; 
                System.out.println(query);
               try{
                statement.executeUpdate(query);
               }catch(Exception e){
                System.out.println(e);
               }
            }

        }catch(Exception e){
            System.out.println(e);
            e.printStackTrace();
        }

        return "A";

    }
    

}

