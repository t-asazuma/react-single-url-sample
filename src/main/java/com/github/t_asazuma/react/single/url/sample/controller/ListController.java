package com.github.t_asazuma.react.single.url.sample.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ListController {
	@RequestMapping("/api")
	public ResponseEntity<List<Map<String, Object>>> handleRequest() {
		List<Map<String, Object>> result = new ArrayList<>();
		
		for(int i = 0; i < 10; i++) {
			Map<String, Object> record = new HashMap<>();
			record.put("id", i);
			record.put("name", "test" + String.valueOf(i));
			
			result.add(record);
		}
		
		return new ResponseEntity<List<Map<String,Object>>>(result, HttpStatus.OK);
	}
}
