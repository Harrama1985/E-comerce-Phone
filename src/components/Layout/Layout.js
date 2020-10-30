import React,{Component, Fragment} from 'react'
import Toolbar from '../Toolbar/Toolbar'
import classes from './Layout.module.css'


class Layout extends Component{

    render(){
        return (
            <Fragment>
                <Toolbar />
                <main className={classes.Container}>
                    {this.props.children}
                </main>
            </Fragment>
        )
    }
}

export default Layout