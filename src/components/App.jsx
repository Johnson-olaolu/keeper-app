import React from 'react';
import Footer from './Footer.jsx'
import Header from './Header.jsx'
import Note from './Note.jsx';
import { Notes } from '../notes.js'



class App extends React.Component {
    render() {
        return (
            <div >
                <Header />
                {Notes.map((Notes) => {
                    return (
                        <Note
                            key={Note.id}
                            title={Notes.title}
                            content={Notes.content}
                        />
                    )
                })}
                <Footer />
            </div>
        )

    }
}

export default App;