import { NextRequest, NextResponse } from 'next/server'

function isBot(ua: string) {
    return /bot|crawl|spider|slurp|bing|yandex|baidu/i.test(ua)
}

export async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl

    // 1) Пропускаємо статику, API, файли
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        /\.[a-zA-Z0-9]+$/.test(pathname)
    ) {
        return NextResponse.next()
    }

    // 2) Боти — без змін
    const ua = req.headers.get('user-agent') || ''
    if (isBot(ua)) {
        return NextResponse.next()
    }

    // 3) Дістаємо IP із x-forwarded-for
    const forwarded = req.headers.get('x-forwarded-for')
    const ip = forwarded?.split(',')[0].trim() || ''

    // 4) (опційно) Якщо є req.geo — можемо використовувати його:
    // const country = req.geo?.country || ''
    // Але у вас був зовнішній запит, тому залишимо його:
    let isDK = false
    try {
        const { success, country_code } = await fetch(`https://ipwho.is/${ip}`)
            .then(r => r.json())
        isDK = success && country_code === 'HR'
    } catch (e) {
        console.error('[GEO ERROR]', e)
    }

    // 5) Якщо хто заходить на /site:
    if (pathname === '/site') {
        return isDK
            ? NextResponse.next()
            : NextResponse.redirect(new URL('/', req.url))
    }

    // 6) Якщо IP з DK — переписуємо будь-який шлях на /site
    if (isDK) {
        const url = req.nextUrl.clone()
        url.pathname = '/site'
        return NextResponse.rewrite(url)
    }

    // 7) Решта — звичайний рендер
    return NextResponse.next()
}

export const config = {
    matcher: ['/', '/((?!_next|api).*)'],
}