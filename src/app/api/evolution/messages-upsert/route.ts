import { NextResponse, type NextRequest } from 'next/server'



export async function POST(_req: NextRequest, ctx: { params: { id: string } },): Promise<NextResponse> {
    const body = _req.json(); // you can process the request body if needed

    console.log(body);

    return NextResponse.next();
}