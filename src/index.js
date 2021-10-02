import './style.css';
import HTMLManager from './html';
import StorageManager from './storage';

let list = [];

const root = document.getElementById('root');

const html = new HTMLManager();

const storage = new StorageManager();

list = storage.load();

html.display(list, root);
