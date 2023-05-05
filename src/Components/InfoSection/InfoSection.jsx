import React, { useState } from 'react'
import "./InfoSection.css"
import { MdModeEditOutline } from "react-icons/md"
import Athletes from '../Athletes/Athletes';

function InfoSection() {
    let [palmares, setPalmares] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur molestie blandit. Maecenas rutrum mauris sit amet urna pulvinar feugiat. Cras non nisl quis enim iaculis egestas. Vivamus vehicula tristique hendrerit. Phasellus pharetra sapien vitae arcu porta tempor. Suspendisse quis ante venenatis, efficitur ipsum congue, posuere nibh. Morbi non ante lacus. In hac habitasse platea dictumst.");
  return (
    <div className='infoSection'>
        <img src="" alt="" />
        <div className='infoSection-description'>
            <h2>Historia del club</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur molestie blandit. Maecenas rutrum mauris sit amet urna pulvinar feugiat. Cras non nisl quis enim iaculis egestas. Vivamus vehicula tristique hendrerit. Phasellus pharetra sapien vitae arcu porta tempor. Suspendisse quis ante venenatis, efficitur ipsum congue, posuere nibh. Morbi non ante lacus. In hac habitasse platea dictumst.</p>
        </div>
        <div className='infoSection-description'>
            <h2>Palmarés <MdModeEditOutline color='gray'/> <small className='small'>editar</small></h2>
            <p>{palmares}</p>
        </div>
        <button>Publicar un/a atleta</button>
        <Athletes />
    </div>
  )
}

export default InfoSection