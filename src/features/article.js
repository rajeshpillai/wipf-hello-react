import React, {useState, useEffect} from 'react'
import {useDocumentTitle} from '../hooks/use-document-title';

const API = "https://conduit.productionready.io/api/";  //users/login


export default function Article() {
  useDocumentTitle("Article Page");
  
  // useEffect(() => {
  //   document.title = "Article Page";
  // })

  return (
    <div>
      Articles
    </div>
  )
}
