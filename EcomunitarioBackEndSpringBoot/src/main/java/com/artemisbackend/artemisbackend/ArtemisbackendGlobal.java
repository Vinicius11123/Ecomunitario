package com.artemisbackend.artemisbackend;

import java.util.HashMap;
import java.util.ArrayList;


public class ArtemisbackendGlobal {
    public static ArtemisbackendGlobal ArtemisBackEndo = null;

    ArrayList<ArtemisbackendUsers> arrayStore;

    public ArtemisbackendGlobal(){
        arrayStore = new ArrayList<>();
    }

    public static ArtemisbackendGlobal get_back(){
        if(ArtemisBackEndo == null){
            ArtemisBackEndo = new ArtemisbackendGlobal();
            System.out.println("criei");
        }
        return ArtemisBackEndo;
    }
}

