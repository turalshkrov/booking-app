import { create } from "zustand";

export const reservationStore = create((set) => ({
	destination: null,
	date: [null, null],
	guest: {
		adult: 2,
		child: 0,
	},
	room: 1,
	hotel: null,
	setDestination: (destination) => set({ destination }),
	setDate: (date) => set({ date }),
	setGuest: (guest) => set({ guest }),
	setRoom: (room) => set({ room }),
	setHotel: (hotel) => set({ hotel }),
}));
