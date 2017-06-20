import React,{Component} from 'react';
import {connect} from 'react-redux';
export default function (ComposedComponent) {
    class RequireAuth extends Component{
        static contextTypes = {
            router:React.PropTypes.object
        };
        componentWillMount(){
            if (!this.props.authenticated){
                    this.context.router.push('/');
            }
        }
        componentWillUpdate(nextProps){
            if(!nextProps.authenticated){
                    this.context.router.push('/');
            }
        }
        render(){
            console.log(this.props.authenticated);
            return <ComposedComponent {...this.props} />
        }
    }
    const mapStateToProps = ({authenticated}) =>{
      return {authenticated:authenticated}
    };
    return connect(mapStateToProps)(RequireAuth);
}