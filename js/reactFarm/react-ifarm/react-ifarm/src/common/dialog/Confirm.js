import { Modal} from 'antd';
const confirm = Modal.confirm;

 const   showConfirm=(props)=> {
  confirm({
    title: props.title,
    content: props.content,
    onOk() {
        props.okFunc()
    },
    onCancel() {},
  });
}
 export default showConfirm
