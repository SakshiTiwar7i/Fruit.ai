import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const FaqContainer = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
`;

const FaqCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;
  margin: 10px 0;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const FaqQuestion = styled.h3`
  color: #333;
`;

const FaqAnswer = styled.p`
  color: #777;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 8px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);
  const [newFaqQuestion, setNewFaqQuestion] = useState('');
  const [newFaqAnswer, setNewFaqAnswer] = useState('');
  const [editingFaqId, setEditingFaqId] = useState(null);
  const [editingQuestion, setEditingQuestion] = useState('');
  const [editingAnswer, setEditingAnswer] = useState('');

  useEffect(() => {
    fetch('/api/faqs')
      .then((response) => response.json())
      .then((data) => setFaqs(data));
  }, []);

  // Add new FAQ
  const handleAddFaq = () => {
    if (!newFaqQuestion || !newFaqAnswer) return;

    fetch('/api/faqs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question: newFaqQuestion, answer: newFaqAnswer }),
    })
      .then((response) => response.json())
      .then((data) => {
        setFaqs([...faqs, data]);
        setNewFaqQuestion('');
        setNewFaqAnswer('');
      });
  };

  // Edit an FAQ
  const handleEditFaq = (id) => {
    setEditingFaqId(id);
    const faqToEdit = faqs.find((faq) => faq.id === id);
    setEditingQuestion(faqToEdit.question);
    setEditingAnswer(faqToEdit.answer);
  };

  // Update an FAQ
  const handleUpdateFaq = (id) => {
    fetch(`/api/faqs/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question: editingQuestion, answer: editingAnswer }),
    })
      .then((response) => response.json())
      .then((updatedFaq) => {
        setFaqs(
          faqs.map((faq) =>
            faq.id === id ? updatedFaq : faq
          )
        );
        setEditingFaqId(null);
      });
  };

  // Delete an FAQ
  const handleDeleteFaq = (id) => {
    fetch(`/api/faqs/${id}`, {
      method: 'DELETE',
    }).then(() => {
      setFaqs(faqs.filter((faq) => faq.id !== id));
    });
  };

  return (
    <FaqContainer>
      <h2>FAQ</h2>
      <Input
        type="text"
        value={newFaqQuestion}
        onChange={(e) => setNewFaqQuestion(e.target.value)}
        placeholder="Enter a new FAQ question"
      />
      <Input
        type="text"
        value={newFaqAnswer}
        onChange={(e) => setNewFaqAnswer(e.target.value)}
        placeholder="Enter the FAQ answer"
      />
      <Button onClick={handleAddFaq}>Add FAQ</Button>

      {faqs.map((faq) => (
        <FaqCard key={faq.id}>
          {editingFaqId === faq.id ? (
            <>
              <Input
                type="text"
                value={editingQuestion}
                onChange={(e) => setEditingQuestion(e.target.value)}
                placeholder="Edit question"
              />
              <Input
                type="text"
                value={editingAnswer}
                onChange={(e) => setEditingAnswer(e.target.value)}
                placeholder="Edit answer"
              />
              <Button onClick={() => handleUpdateFaq(faq.id)}>Update</Button>
              <Button onClick={() => setEditingFaqId(null)}>Cancel</Button>
            </>
          ) : (
            <>
              <FaqQuestion>{faq.question}</FaqQuestion>
              <FaqAnswer>{faq.answer}</FaqAnswer>
              <Button onClick={() => handleEditFaq(faq.id)}>Edit</Button>
              <Button onClick={() => handleDeleteFaq(faq.id)}>Delete</Button>
            </>
          )}
        </FaqCard>
      ))}
    </FaqContainer>
  );
};

export default FAQ;
