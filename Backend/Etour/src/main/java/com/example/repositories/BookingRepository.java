package com.example.repositories;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.entities.Bookings;

@Repository
@Transactional
public interface BookingRepository  extends JpaRepository<Bookings,Integer>
{
//	@Modifying
//	@Query("UPDATE Booking b SET b.bookingDate = :bdate, b.customerId = :custid, b.flag = :flag, " +
//	           "b.packageId = :packageid, b.tourAmount = :Touramt, b.totalAmount = :totalamt, " +
//	           "b.taxes = :taxes, b.passengers = :passengers WHERE b.bookingId = :bookingId")
//	void update(@Param("bdate") String bdate, @Param("custid") int cuid, @Param("flag") int flag, @Param("packageid") int packid, @Param("Touramt") double touramt, @Param("totalamt") double totamt, @Param("taxes") double taxes,@Param("passengers") int pass);
		
}
