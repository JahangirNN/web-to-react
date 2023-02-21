import React from "react";

import SoloCard from "./SoloCard";
const CardSection = () => (
    <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">
          We love new friends!
        </h2>
        <div className="row">
          <div className="col-4">
            <SoloCard title="Spiderman" src="https://images.theconversation.com/files/175539/original/file-20170626-315-1h7k01d.jpg?ixlib=rb-1.1.0&rect=0%2C618%2C3500%2C1697&q=45&auto=format&w=1356&h=668&fit=crop" text="Spider-Man is a superhero appearing in American comic books published by Marvel Comics. Created by writer-editor Stan Lee and artist Steve Ditko, he first appeared in the anthology comic book Amazing Fantasy #15 in the Silver Age of Comic Books."/>
          </div>  
          <div className="col-4">
          <SoloCard title="Spiderman" src="https://images.theconversation.com/files/175539/original/file-20170626-315-1h7k01d.jpg?ixlib=rb-1.1.0&rect=0%2C618%2C3500%2C1697&q=45&auto=format&w=1356&h=668&fit=crop" text="Spider-Man is a superhero appearing in American comic books published by Marvel Comics. Created by writer-editor Stan Lee and artist Steve Ditko, he first appeared in the anthology comic book Amazing Fantasy #15 in the Silver Age of Comic Books."/>
          </div>
          <div className="col-4">
          <SoloCard title="Spiderman" src="https://dam.smashmexico.com.mx/wp-content/uploads/2022/12/spider-man-4-pelicula-actualizacion-sony-pictures-marvel-studios-cover.jpg" text="Spider-Man is a superhero appearing in American comic books published by Marvel Comics. Created by writer-editor Stan Lee and artist Steve Ditko, he first appeared in the anthology comic book Amazing Fantasy #15 in the Silver Age of Comic Books."/>
          </div>
        </div>
      </div>
    </section>


)

export default CardSection;