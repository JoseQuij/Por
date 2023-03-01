import React from 'react'
import create from 'zustand'

const useStore = create((set) => ({
    people: ['John Doe', 'Jane Doe', 'Jeni Lane'],
    addperson: (person) => set((state) => ({ people: [...state.people, person]}))

}))

export default useStore;