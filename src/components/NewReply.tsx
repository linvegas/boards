import "../styles/ModalForm.css";

import Modal from "./Modal";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Textarea from "./ui/Textarea";

const NewReply = () => {
  return (
    <Modal title="New Reply" label="New Reply">
      <form method="dialog">
        <div className="form-control">
          <label>Name</label>
          <Input placeholder="Anonymous" type="text" />
        </div>
        <div className="form-control">
          <label>Comment</label>
          <Textarea />
        </div>
        <div className="form-control">
          <label>File</label>
          <Input type="file" />
        </div>
        <menu className="form-submit-menu">
          <Button type="submit" label="Post" color="seagreen" />
        </menu>
      </form>
    </Modal>
  );
};

export default NewReply;
