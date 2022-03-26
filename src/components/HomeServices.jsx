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
                <img src="../icon/icon3.svg" alt="" />
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
                <h2 className="subtitulo">Galeria</h2>
                <div className="contenedor-galeria">

                    <img src="https://images.pexels.com/photos/11012766/pexels-photo-11012766.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="img-galeria" />
                    <img src="https://images.pexels.com/photos/11556911/pexels-photo-11556911.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="img-galeria" />
                    <img src="https://images.pexels.com/photos/11459874/pexels-photo-11459874.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="img-galeria" />
                    <img src="../img/img13.jpeg" alt="" className="img-galeria" />
                    <img src="../img/img14.jpeg" alt="" className="img-galeria" />
                    <img src="../img/img15.jpeg" alt="" className="img-galeria" />
                </div>
            </div>
        </section>

        <section class="contenedor" id="expertos">
            <h2 class="subtitulo">
                Especializados en:
            </h2>
            <section class="experts">
                <div class="cont-expert">
                    <img src="./icon/iconf2.svg" alt="" />
                    <h3 class="n-expert">
                        Design
                    </h3>
                </div>
                <div class="cont-expert">
                    <img src="./icon/iconf3.svg" alt="" />
                    <h3 class="n-expert">
                        Styles
                    </h3>
                </div>
                <div class="cont-expert">
                    <img src="./icon/iconf4.svg" alt="" />
                    <h3 class="n-expert">
                        Codes
                    </h3>
                </div>
            </section>
        </section>
    </main>
</div>
)
}

export {HomeServices}