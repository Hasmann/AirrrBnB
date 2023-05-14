import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './reservations/dto/create-reservation.dto';
import { UpdateReservationDto } from './reservations/dto/update-reservation.dto';
import { reservationRepository } from './reservations.repository';

@Injectable()
export class ReservationsService {
  constructor(private reservationRepo: reservationRepository) {}

  create(createReservationDto: CreateReservationDto) {
    return this.reservationRepo.create({
      ...createReservationDto,
      timestamp: new Date(),
    });
  }

  findAll() {
    return this.reservationRepo.findAll();
  }

  findOne(_id: string) {
    return this.reservationRepo.findOne({ _id });
  }

  update(_id: string, updateReservationDto: UpdateReservationDto) {
    return this.reservationRepo.findOneAndUpdate(
      { _id },
      { $set: updateReservationDto },
    );
  }

  remove(_id: string) {
    return this.reservationRepo.findOneAndDelete({ _id });
  }
}
