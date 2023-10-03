package com.example.services;

import java.util.List;
import java.util.Optional;

import com.example.entities.SubSector;

public interface SubSectorService {

	    void saveSubSector(SubSector subSector);
	    List<SubSector> getSubSectorById(int subSectorId);
	    List<SubSector> getAllSubSectors();
	    void deleteSubSector(int subSectorId);
}
