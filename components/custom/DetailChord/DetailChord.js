"use client"
import ChordLyricUI from '@/components/Chords/ChordLyricUI'
import React from 'react'

const DetailChord = ({data}) => {

  return (
    <main className='w-full flex-1 h-[100vh] flex flex-col overflow-y-auto relative bg-green-400'>
      <ChordLyricUI chordLyric={data?.chordLyric} title={data?.title} singer={data?.singer?.name}/>
    </main>
  )
}

export default DetailChord