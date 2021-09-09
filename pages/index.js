import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from "next/link";

import {useEffect, useState} from 'react'
import {resources} from "../api/data";

import ResourceList from "@/components/ResourceList";
import ResourceHighlight from "@/components/ResourceHighlight";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";


export default function Home() {
  return (
    <>
      <ResourceHighlight resources={resources.slice(0,2)}/>
      <Newsletter/>
      <ResourceList resources={resources.slice(2)}/>
      <Footer/>
    </>
  )
}
