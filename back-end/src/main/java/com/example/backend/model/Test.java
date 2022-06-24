package com.example.backend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Type;


@Entity
@Table(name = "testes")

public class Test {
	

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

@Column(name = "nom")

	private String nom;

@Column(name = "prenom")

	private String prenom;
	
	public Test() {
	}
	
public Test(String nom, String prenom) {
		super();
		this.nom = nom;
		this.prenom = prenom;
	}
public Test(int id, String nom, String prenom) {
	super();
	this.id = id;
	this.nom = nom;
	this.prenom = prenom;
}


	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getPrenom() {
		return prenom;
	}
	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

}
