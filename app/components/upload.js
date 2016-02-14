import React from 'react'

form(role="form", action="/api/uploadImg", method="post", enctype="multipart/form-data")
      div(class="form-group")
        label(for="onixfile") Upload ONIX File        
        input(type="file", name="onixfile", id="onixfile")
        input(type="submit")


