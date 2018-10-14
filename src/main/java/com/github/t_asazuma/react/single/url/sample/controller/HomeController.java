package com.github.t_asazuma.react.single.url.sample.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
	@RequestMapping("/")
	public String handleRequest() {
		return "index";
	}
}
