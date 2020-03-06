import React from 'react'

export default function LogBook() {
  return (
    <form>
      <section>
        <h4>Date</h4>
        <input type="date" />
        <h4>Dive No.</h4>
        <input type="number" />
      </section>
      <section>
        <input type="text" placeholder="Country" />
        <input type="text" placeholder="City" />
        <input type="text" placeholder="Point" />
      </section>
      <section>
        <h4>Entry</h4>
        <p>Timer</p>
        <input type="time" />
        <p>Air</p>
        <input type="number" placeholder="bar" />
      </section>
      <section>
        <h4>Exit</h4>
        <p>Timer</p>
        <input type="time" />
        <p>Air</p>
        <input type="number" placeholder="bar" />
      </section>
      <section>
        <h4>Water type</h4>
        <select name="water-type" id="wt">
          <option value="salt-water">salt water</option>
          <option value="fresh-water">fresh water</option>
          <option value="brackish-water">brackish water</option>
        </select>
        <h4>Type of Dive</h4>
        <input type="checkbox" name="fun" id="fun" />
        <input type="checkbox" name="drift" id="drift" />
        <input type="checkbox" name="night" id="night" />
        <input type="checkbox" name="deep" id="deep" />
        <input type="checkbox" name="cave" id="cave" />
        <input type="checkbox" name="wreck" id="wreck" />
        <input type="checkbox" name="rescue" id="rescue" />
        <input type="checkbox" name="ice" id="ice" />
      </section>
      <section>
        <textarea name="description" id="" cols="30" rows="10"></textarea>
      </section>
    </form>
  )
}
