import React,{useState} from 'react'

const Title = () => {
    const [title, setTitle] = useState('');
    // const [values, setValues] = useState([]);

    
    const handleSave = (event) => {
       event.preventDefault();
       console.log(title);
    }
    return (
        <div>
            <select  custom name="title1" onChange={(e) => setTitle(e.target.value)} value={title} id="title1">
                    <option value="0">{"- Select a value -"}</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                  </select>
                  <div>
                      <button onClick={handleSave}>Save</button>
                  </div>
        </div>
    )
}

export default Title
