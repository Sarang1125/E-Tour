package com.example.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entities.Bookings;
import com.example.repositories.BookingRepository;

@Service
public class BookingServImpl implements BookingService{
	
	@Autowired
	BookingRepository repo;

	@Override
	public void createBooking(Bookings booking) {
		repo.save(booking);
		
	}

	@Override
	public List<Bookings> getBookings() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}

	@Override
	public Bookings getBookingsbyid(int id) {
		// TODO Auto-generated method stub
		return repo.findById(id).orElse(null);
	}

//	@Override
//	public void update(int bookingId, Bookings booking) {
//		// TODO Auto-generated method stub
//		repo.update(booking., bookingId);
		
//	}

	@Override
	public void deletebking(int id) {
		// TODO Auto-generated method stub
		repo.deleteById(id);
		
	}
	
	
	

}
