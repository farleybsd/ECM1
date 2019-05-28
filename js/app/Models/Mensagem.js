class Mensagen{
    constructor(texto ='')
    {
        this._texto  = texto;
    }

    get Texto()
    {
        return this._texto;
    }
    set Texto(texto)
    {
        this._texto = texto;
    }
}