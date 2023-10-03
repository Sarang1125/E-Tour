package com.example.repositories;
//import java.util.List;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.entities.SubSector;

@Repository
@Transactional
public interface SubSectorRepository extends JpaRepository<SubSector, Integer> {
	
	@Modifying
	@Query(value = "SELECT * FROM sub_sector WHERE sector_id = :subSectorIds", nativeQuery = true)
    List<SubSector> findSubSectorsByIds( @Param("subSectorIds") int id);
	

}
