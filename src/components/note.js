import React from "react";

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };

    this.updateDB = this.updateDB.bind(this);
    this.getFromDB = this.getFromDB.bind(this);
    this.addNote = this.addNote.bind(this);
  }

  componentDidMount() {
    this.getFromDB({ store: "sleep-app", key: "notes" });
  }

  updateDB(obj) {
    let openRequest = indexedDB.open(obj.store, 1);

    openRequest.onupgradeneeded = () => {
      let DB = openRequest.result;
      if (!DB.objectStoreNames.contains(obj.store)) {
        DB.createObjectStore(obj.store);
      }
    };

    openRequest.onerror = function () {
      console.error("Can't create DB", openRequest.error);
    };

    openRequest.onsuccess = () => {
      let DB = openRequest.result;

      let tx = DB.transaction(obj.store, "readwrite");
      let store = tx.objectStore(obj.store);

      store.put(obj.data, obj.key);
    };
  }

  getFromDB(obj) {
    let openRequest = indexedDB.open(obj.store, 1);

    openRequest.onupgradeneeded = () => {
      let DB = openRequest.result;
      if (!DB.objectStoreNames.contains(obj.store)) {
        DB.createObjectStore(obj.store);
      }
    };

    openRequest.onerror = function () {
      console.error("Can't create DB", openRequest.error);
    };

    openRequest.onsuccess = () => {
      let DB = openRequest.result;

      let tx = DB.transaction(obj.store, "readonly");
      let store = tx.objectStore(obj.store);

      let notes = store.get(obj.key);

      tx.oncomplete = () => {
        if (notes.result) {
          this.setState({ notes: notes.result });
        }
      };
    };
  }

  addNote() {
    let note = {
      title: "",
      text: "",
    };

    this.setState((state) => {
      return {
        notes: [note, ...state.notes],
      };
    });
  }

  render() {
    let notes = this.state.notes.map((note, i) => {
      return (
        <div className="Note" key={i}>
          <textarea
            className="NoteTitle"
            rows="2"
            placeholder="Заголовок"
          ></textarea>
          <textarea
            className="NoteText"
            rows="4"
            placeholder="Что вам приснилось?"
          ></textarea>
        </div>
      );
    });

    return (
      <div>
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <textarea
                  className="NoteTitle"
                  rows="2"
                  placeholder="Заголовок"
                ></textarea>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="NotesBackground">
          {notes}
          <button
            className="btnAddNote"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            добавить сон
          </button>
        </div>
      </div>
    );
  }
}

export default Notes;
