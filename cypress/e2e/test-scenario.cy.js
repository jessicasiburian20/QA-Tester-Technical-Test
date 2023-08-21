import { venue_schedule } from '../fixtures/data_jadwal_dan_harga.js';
import { venue_booking } from '../fixtures/data_booking.js';
let user_id, venue_id, date, start_time, end_time;

describe('Test Booking Feature', () => {
  
  it('Check List Venue', () =>{
    //Tampilkan data jadwal dan harga
    cy.log(JSON.stringify(venue_schedule.body.venue));  
  }),

  it('Success Booking', () => {

    //Venue dan Jadwal yang dipilih oleh user
    user_id = "12",
    venue_id = "15",
    date = "2022-12-10",
    start_time = "07:00:00'",
    end_time = "09:00:00";

    //Cek harga venue sesuai dengan jadwal yang dipilih oleh user
    for (let i = 0; i < venue_schedule.body.venue.length; i++) {
      if(venue_schedule.body.venue[i].venue_id === venue_id 
        && venue_schedule.body.venue[i].date === date 
        && venue_schedule.body.venue[i].start_time === start_time
        && venue_schedule.body.venue[i].end_time === end_time)
      {
        cy.log("Anda memilih venue: " +venue_id+ " untuk Tanggal: " +date+ " Jam: " +start_time+ " Sampai " +end_time + " dengan total harga: " +venue_schedule.body.venue[i].price)
      }
    }

    //Cek apakah venue dan jadwal yang dipilih oleh user sudah dibooking atau belum
    for (let i = 0; i < venue_booking.body.booking.length; i++) {
      if(venue_booking.body.booking[i].venue_id === venue_id 
        && venue_booking.body.booking[i].date === date 
        && venue_booking.body.booking[i].start_time === start_time
        && venue_booking.body.booking[i].end_time === end_time)
      {
        cy.log("Venue sudah dibooking untuk jadwal yang dipilih!");
        break;
      } else
      {
        cy.log("Venue masih available dan dapat dibooking oleh user: "+user_id)
        break;
      }
    }
  }),

  it('Detect Double Book', () => {

    //Venue dan Jadwal yang dipilih oleh user
    user_id = "12",
    venue_id = "15",
    date = "2022-12-10",
    start_time = "09:00:00'",
    end_time = "11:00:00";

    //Cek harga venue sesuai dengan jadwal yang dipilih oleh user
    for (let i = 0; i < venue_schedule.body.venue.length; i++) {
      if(venue_schedule.body.venue[i].venue_id === venue_id 
        && venue_schedule.body.venue[i].date === date 
        && venue_schedule.body.venue[i].start_time === start_time
        && venue_schedule.body.venue[i].end_time === end_time)
      {
        cy.log("Anda memilih venue: " +venue_id+ " untuk Tanggal: " +date+ " Jam: " +start_time+ " Sampai " +end_time + " dengan total harga: " +venue_schedule.body.venue[i].price)
      }
    }

    //Cek apakah venue dan jadwal yang dipilih oleh user sudah dibooking atau belum
    for (let i = 0; i < venue_booking.body.booking.length; i++) {
      if(venue_booking.body.booking[i].venue_id === venue_id 
        && venue_booking.body.booking[i].date === date 
        && venue_booking.body.booking[i].start_time === start_time
        && venue_booking.body.booking[i].end_time === end_time)
      {
        cy.log("Venue sudah dibooking untuk jadwal yang dipilih!");
        break;
      } else
      {
        cy.log("Venue masih available dan dapat dibooking oleh user: "+user_id)
        break;
      }
    }
  })
})
