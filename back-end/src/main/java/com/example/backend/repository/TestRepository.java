package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.model.Test;


@Repository
public interface TestRepository extends JpaRepository<Test, Integer> {
	
	

}
