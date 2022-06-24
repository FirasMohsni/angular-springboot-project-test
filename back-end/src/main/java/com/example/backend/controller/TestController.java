package com.example.backend.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.ResourceAccessException;

import com.example.backend.exeption.ResourceNotFoundException;
import com.example.backend.model.Test;
import com.example.backend.repository.TestRepository;

@RestController
@RequestMapping("/api/v1/")
public class TestController {
	
	@Autowired
	private TestRepository testRepository;
	
	
	
	@GetMapping("/tests")
	public List<Test> getAllTests(){
		return testRepository.findAll();
		
	}
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/tests")
	public  Object createTest(@RequestBody Test test) {
		return testRepository.save(test);
		
	}
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/tests/{id}")
public ResponseEntity<Test>  getTestbyId(@PathVariable int id) {
		Test test = testRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException());
		return ResponseEntity.ok(test);
	
}
	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping("/tests/{id}")
	public ResponseEntity<Test> updatetest(@PathVariable int id,@RequestBody Test testdetails){
		Test test = testRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException());
		test.setNom(testdetails.getNom());
		test.setPrenom(testdetails.getPrenom());
		Test updateTest = testRepository.save(test);
		
		
		return ResponseEntity.ok(updateTest);
		
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@DeleteMapping("/tests/{id}")
	public ResponseEntity<Map<String, Boolean>> delete(@PathVariable int id){
		Test test = testRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException());
		testRepository.delete(test);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted",Boolean.TRUE);
		return ResponseEntity.ok(response);
		
		
		
	}
}
