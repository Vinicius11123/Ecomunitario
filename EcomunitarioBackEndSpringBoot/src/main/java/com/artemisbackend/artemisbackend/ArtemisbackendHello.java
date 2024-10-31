package com.artemisbackend.artemisbackend;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ArtemisbackendHello {
    @RequestMapping("/hello")
    public String teste(){
        return "hello there";
    }
}
