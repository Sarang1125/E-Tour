package com.example.controllers;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.entities.PackageMaster;
import com.example.services.PackageMasterService;

@RestController
@CrossOrigin("*") 
public class PackageMasterController {
 @Autowired
 private PackageMasterService manager;
 
 @GetMapping(value="api/PackageMaster")
 public List<PackageMaster> showProduct(){
	 return manager.getPackages();
 }
  @GetMapping(value="api/packageMaster/{id}")
  public List<PackageMaster> getPack(@PathVariable int id){
	  List<PackageMaster> pm =manager.getPackages(id);
	  return pm;
  }
  //delete
 @DeleteMapping(value="api/PackageMaster/{id}")
 public void removepackage(@PathVariable int id) {
	 manager.delete(id);
 }
 //post
 @PostMapping(value="api/PackageMaster")
 public void addpackage(@RequestBody PackageMaster pm) {
	 manager.addPackages(pm);
 }
}
