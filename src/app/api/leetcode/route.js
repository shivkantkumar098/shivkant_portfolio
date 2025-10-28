import { NextResponse } from "next/server";

export async function GET() {
  const username = "golu_sharma_24"; // 👈 replace with your real username

  const query = `
    query getUserProfile($username: String!) {
      matchedUser(username: $username) {
        userCalendar {
          submissionCalendar
        }
      }
    }
  `;

  try {
    const response = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0",
      },
      body: JSON.stringify({ query, variables: { username } }),
    });

    const result = await response.json();

    // 👇 Add this to debug
    console.log("🧩 LeetCode API Raw Response:", JSON.stringify(result, null, 2));

    const calendarData = result?.data?.matchedUser?.userCalendar?.submissionCalendar;

    if (!calendarData) {
      return NextResponse.json({ error: "No data found", debug: result }, { status: 404 });
    }

    const parsedData = JSON.parse(calendarData);
    const formattedData = Object.entries(parsedData).map(([timestamp, count]) => ({
      date: new Date(Number(timestamp) * 1000).toISOString().split("T")[0],
      count,
    }));

    return NextResponse.json(formattedData);
  } catch (error) {
    console.error("❌ Error fetching LeetCode data:", error);
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}
