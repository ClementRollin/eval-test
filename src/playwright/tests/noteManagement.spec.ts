import { test, expect } from '@playwright/test';

test('should allow user to manage notes', async ({ page }) => {

    // Add a note
    await page.fill('input[placeholder="Title"]', 'Test Note');
    await page.fill('input[placeholder="Grade"]', '15');
    await page.fill('textarea[placeholder="Comment"]', 'This is a test comment');
    await page.click('button:text("Add Note")');

    // Verify the note appears in the list
    const note = page.locator('text=Test Note');
    await expect(note).toBeVisible();

    // Verify background color
    const noteParent = note.locator('..');
    await expect(noteParent).toHaveCSS('background-color', 'rgb(212, 237, 218)');

    // Edit the note
    await note.click();
    await page.fill('input[placeholder="Title"]', 'Updated Note');
    await page.click('button:text("Save")');

    // Verify the updated note
    const updatedNote = page.locator('text=Updated Note');
    await expect(updatedNote).toBeVisible();

    // Delete the note
    await updatedNote.click();
    await page.click('button:text("Delete")');
    await page.click('button:text("Confirm")');

    // Verify the note is deleted
    await expect(page.locator('text=Updated Note')).not.toBeVisible();
});