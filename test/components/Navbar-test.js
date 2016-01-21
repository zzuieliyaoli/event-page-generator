import React from 'react'
import expect from 'expect'
import { createRenderer } from 'react-addons-test-utils'
import expectJSX from 'expect-jsx'
expect.extend(expectJSX)

import Navbar from './../../app/components/Navbar'

describe('Navbar', () => {
    it('Navbar works', () => {
        let renderer = createRenderer()
        renderer.render(<Navbar />)
        let actualElement = renderer.getRenderOutput()
        let expectedElement = ( <Router>
                <Route path="/" component={App}>
                <IndexRoute component={Dashboard} />
                  <Route path="about" component={About} />
                  <Route path="inbox" component={Inbox}>
                    <Route path="/messages/:id" component={Message} />
                    <Redirect from="messages/:id" to="/messages/:id" />
                  </Route>
                </Route>
            </Router>)
        expect(actualElement).toEqualJSX(expectedElement)


    })
})