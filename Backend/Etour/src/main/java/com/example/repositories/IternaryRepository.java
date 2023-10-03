package com.example.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.entities.Iternary;


@Repository
@Transactional
public interface IternaryRepository extends JpaRepository<Iternary, Integer>{
	
	@Modifying
	@Query(value = "SELECT * FROM iternary WHERE package_id = :subSectorIds", nativeQuery = true)
    List<Iternary> findBypackageIds( @Param("subSectorIds") int id);
	
	

}
