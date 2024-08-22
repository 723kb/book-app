<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Books>
 */
class BooksFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $categorys = ['React', 'Vue', 'Laravel'];
        return [
            'title' => $this -> faker ->realText(12),
            'content' => $this -> faker ->realText(12),
            'category' => $this -> faker ->randomElement($categorys),
        ];
    }
}
