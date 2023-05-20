import * as uuid from "uuid"

export function entityIdGenerator(){
    return uuid.v4().slice(-12)
}