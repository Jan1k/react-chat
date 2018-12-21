import  React  from 'react';
import { withStyles } from '@material-ui/core/styles';
import ChatMessage from './ChatMessage';

const styles = theme => ({
  messagesWrapper: {
    overflowX: 'scroll',
    height: '100%',
    width: '100%',
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: '120px',
  },
})

class ChatMessageList extends React.Component {
  componentDidMount() {
    this.scrollDownHistory();
  }
  
  componentDidUpdate() {
    this.scrollDownHistory();
  }
  
  scrollDownHistory(){
   const messagesWrapper = this.refs.messagesWrapper; // refs указывает не на компонент а на реальный элемент в DOM
   if (messagesWrapper){
     messagesWrapper.scrollTop = messagesWrapper.scrollHeight;
   }
  }
  render(){
    const {classes, messages} = this.props;
  
  return(
      <div className={classes.messagesWrapper} ref="messageWrapper">
        {messages && messages.map((message, index) => (
          <ChatMessage key={index} {...message} />
        ))}
      </div>
  );
}}

export default withStyles(styles)(ChatMessageList);
