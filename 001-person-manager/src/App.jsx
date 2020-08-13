import React, { Component } from "react";
import Persons from "./components/Person/Persons";

class App extends Component {
    state = {
        persons: [
            { firstname: "یونس", lastname: "قربانی", age: 27 },
            { firstname: "ایمان", lastname: "مدائنی", age: 30 },
            { firstname: "سجاد", lastname: "باقرزاده", age: 35 }
        ]
    };
    render() {
        const { persons } = this.state;
        return (
            <div>
                <Persons persons={persons} />
            </div>
        );
    }
}

export default App;
