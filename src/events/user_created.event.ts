import { EVENT_TYPE } from "src/entity/event.model";

export class UserCreatedEvent{
   constructor(private readonly  payload:{
    sourceIp:string;
    destinationIp:string;
    createdBy:string;
    createrName:string;
    createdOn:string;
    eventType:EVENT_TYPE.USER_CREATED
}){}
}