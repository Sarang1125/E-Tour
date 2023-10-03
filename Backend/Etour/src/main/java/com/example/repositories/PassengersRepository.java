package com.example.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.entities.Passengers;
@Repository
@Transactional
public interface PassengersRepository extends JpaRepository<Passengers, Integer>{
     
}
