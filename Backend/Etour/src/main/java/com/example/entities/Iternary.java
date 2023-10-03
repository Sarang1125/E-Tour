package com.example.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name="Iternary")
public class Iternary {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="iterneryid")
	private int iterneryid;
	
	@Column(name="day")
	private String day;
	
	@Column(name="description",length = 2000)
	private String description;
	
	 @Column(name="itrimgPath")
	 private String itrimgPath;
	
	@Column(name="packageId")
	private int packageId;

	public Iternary(int iterneryid, String day, String description, String itrimgPath, int packageId) {
		super();
		this.iterneryid = iterneryid;
		this.day = day;
		this.description = description;
		this.itrimgPath = itrimgPath;
		this.packageId = packageId;
	}

	public Iternary() {
		super();
	}

	public int getIterneryid() {
		return iterneryid;
	}

	public void setIterneryid(int iterneryid) {
		this.iterneryid = iterneryid;
	}

	public String getDay() {
		return day;
	}

	public void setDay(String day) {
		this.day = day;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getItrimgPath() {
		return itrimgPath;
	}

	public void setItrimgPath(String itrimgPath) {
		this.itrimgPath = itrimgPath;
	}

	public int getPackageId() {
		return packageId;
	}

	public void setPackageId(int packageId) {
		this.packageId = packageId;
	}


	
}

