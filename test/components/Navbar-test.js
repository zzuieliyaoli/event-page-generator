import React from 'react'
import { createRenderer } from 'react-addons-test-utils'

import Navbar from './../../app/components/Navbar'

describe('Navbar', () => {
    it('Navbar works', () => {
        let shallowRenderer = createRenderer()
        let actualResult = shallowRenderer.render(<Navbar/>)

        expect(actual.type).toBe('div')
        
    })
})