import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import {EVENT_TYPE} from '../src/entity/event.model';
import { UserCreatedEvent } from './events/user_created.event';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @EventPattern('USER_CREATED')
  async handleUserCreated(data:UserCreatedEvent){
    console.log('user created event recieved', data);

  }

  @EventPattern('EVENT_GENERATED')
  async handleEventGenerated(data:any){
    console.log('event generated ,', data);
    //tdo:store in db, send message
  }

  @EventPattern('USER_LOOGED_IN')
  async handleUserLoggedInEvent(){

  }


}
