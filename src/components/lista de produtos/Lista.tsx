import { Box } from "@mui/system"
import { Card } from "../card/Card"
import { BoxSC } from "./Lista.Styled"

export const Lista = () => {

    const produtos = [
        {
            nome: 'Apple',
            preco: '250,00',
            descricao: 'produto muito bom'
        },
        {
            nome: 'JBL',
            preco: '500,00',
            descricao: 'produto muito ok'
        },
        {
            nome: 'Tablet',
            preco: '2500,00',
            descricao: 'produto muito bom'
        },
        {
            nome: 'Computador',
            preco: '4000,00',
            descricao: 'produto muito bom'
        },
        {
            nome: 'Apple',
            preco: '250,00',
            descricao: 'produto muito bom'
        },
        {
            nome: 'JBL',
            preco: '500,00',
            descricao: 'produto muito ok'
        },
        {
            nome: 'Tablet',
            preco: '2500,00',
            descricao: 'produto muito bom'
        },
        {
            nome: 'Computador',
            preco: '4000,00',
            descricao: 'produto muito bom'
        },
    ]

    return (
        <BoxSC>
            {produtos.map((el: any) =>
                <Card nome={el.nome} preco={el.preco} descricao={el.descricao} />
            )}
        </BoxSC>
    )
}