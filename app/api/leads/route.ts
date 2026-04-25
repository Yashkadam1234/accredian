import { NextRequest, NextResponse } from 'next/server'

// In-memory store for demo (replace with DB in production)
const leads: Record<string, unknown>[] = []

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // Basic validation
    if (!body.name || !body.email || !body.company) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email format check
    const emailRegex = /\S+@\S+\.\S+/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    const lead = {
      id: `lead_${Date.now()}`,
      ...body,
      createdAt: new Date().toISOString(),
      status: 'new',
    }

    // Store in memory (use a DB like Postgres/MongoDB in production)
    leads.push(lead)

    console.log('[Lead Captured]', lead)

    return NextResponse.json(
      {
        success: true,
        message: 'Lead captured successfully',
        id: lead.id,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('[Lead API Error]', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  // Admin endpoint to view leads (protect with auth in production)
  return NextResponse.json({
    total: leads.length,
    leads: leads.map((l) => ({
      id: l.id,
      name: l.name,
      email: l.email,
      company: l.company,
      teamSize: l.teamSize,
      createdAt: l.createdAt,
    })),
  })
}
