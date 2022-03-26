import React from 'react'

const HomeServices = () => {
    return (
    <div>
    <main>
        <section className="contenedor" id="servicio">
            <h2 className="subtitulo">
                Our Services
            </h2>
            <div className="contenedor-servicio">
                <img className="imagen_servicio" src="https://cdn-icons-png.flaticon.com/512/1246/1246270.png?w=740" alt="" />
                <div className="checklist-servicio">
                    <div className="service">
                        <h3 className="n-service"><span className="number">1</span>Unique designs</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis incidunt, at cum fugiat quod mollitia. Provident, ducimus quibusdam!
                        </p>
                        <h3 className="n-service"><span className="number">2</span>Trending</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis incidunt, at cum fugiat quod mollitia. Provident, ducimus quibusdam!
                        </p>
                        <h3 className="n-service"><span className="number">3</span>Fashion</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis incidunt, at cum fugiat quod mollitia. Provident, ducimus quibusdam!
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section className="gallery">
            <div className="contenedor">
                <h2 className="subtitulo">Wild Fashion Gallery</h2>
                <div className="contenedor-galeria">

                    <img src="https://images.pexels.com/photos/11012766/pexels-photo-11012766.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="img-galeria" />
                    <img src="https://images.pexels.com/photos/11556911/pexels-photo-11556911.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="img-galeria" />
                    <img src="https://images.pexels.com/photos/11459874/pexels-photo-11459874.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="img-galeria" />
                    <img src="https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="img-galeria" />
                    <img src="https://images.pexels.com/photos/8452063/pexels-photo-8452063.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="img-galeria" />
                    <img src="https://images.pexels.com/photos/9139846/pexels-photo-9139846.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="img-galeria" />
                    <img src="https://images.pexels.com/photos/11500407/pexels-photo-11500407.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="img-galeria" />
                    <img src="https://images.pexels.com/photos/11091679/pexels-photo-11091679.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="img-galeria" />
                    <img src="https://images.pexels.com/photos/11411384/pexels-photo-11411384.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="img-galeria" />
                </div>
            </div>
        </section>

        <section className="contenedor" id="expertos">
            <h2 className="subtitulo">
                Specialized in:
            </h2>
            <section className="experts">
                <div className="cont-expert">
                    <img src="https://cdn-icons-png.flaticon.com/512/1248/1248520.png?w=740" alt="" />
                    <h3 className="n-expert">
                        Design
                    </h3>
                </div>
                <div className="cont-expert">
                    <img src="https://cdn-icons-png.flaticon.com/512/1248/1248501.png?w=740" alt="" />
                    <h3 className="n-expert">
                        Styles
                    </h3>
                </div>
                <div className="cont-expert">
                    <img src="https://cdn-icons-png.flaticon.com/512/1248/1248506.png?w=740" alt="" />
                    <h3 className="n-expert">
                        Trends
                    </h3>
                </div>
            </section>
        </section>
    </main>
</div>
)
}

export {HomeServices}