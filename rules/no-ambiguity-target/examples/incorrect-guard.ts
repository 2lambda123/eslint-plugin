import { guard, createEvent } from "effector";

const trigger = createEvent();
const target = createEvent();

const result = guard({ clock: trigger, filter: Boolean, target });
